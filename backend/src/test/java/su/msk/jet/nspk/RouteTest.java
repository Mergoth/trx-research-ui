package su.msk.jet.nspk;

import org.apache.camel.CamelContext;
import org.apache.camel.Exchange;
import org.apache.camel.builder.AdviceWithRouteBuilder;
import org.apache.camel.impl.DefaultCamelContext;
import org.apache.camel.impl.DefaultExchange;
import org.apache.camel.test.blueprint.CamelBlueprintTestSupport;
import org.junit.Test;
import org.osgi.framework.BundleContext;

public class RouteTest extends CamelBlueprintTestSupport {

    @Override
    protected String getBlueprintDescriptor() {
        return "test_route.xml";
    }

    @Override
    protected BundleContext createBundleContext() throws Exception {
        BundleContext ctx = super.createBundleContext();
        return ctx;
    }
    
    @Test
    public void testStart() throws Exception {
        getMockEndpoint("mock:end").expectedMessageCount(1);

        template.sendBody("http:localhost:8080/searchService?recordId=12345", "");

        assertMockEndpointsSatisfied();
    }

    @Test
    public void testEnd() throws Exception {
        context.getRouteDefinitions().get(0).adviceWith(context, new AdviceWithRouteBuilder() {
            @Override
            public void configure() throws Exception {
                mockEndpoints();
            }
        });
        getMockEndpoint("mock:http:localhost:8181/cxf/searchService/onlineLog").expectedMessageCount(1);

        CamelContext ctx = new DefaultCamelContext();
        Exchange ex = new DefaultExchange(ctx);
        ex.getIn().setHeader("NspkSearchServiceUsername", "test1");
        ex.getIn().setHeader("NspkSearchServicePassword", "test2");
        ex.getIn().setBody("");
        template.send("direct:start", ex);

        assertMockEndpointsSatisfied();
    }
    
   
    @Test
    public void testCredentials() throws Exception {
        getMockEndpoint("mock:end").expectedMessageCount(1);
        getMockEndpoint("mock:end").expectedBodiesReceived("{\"name\":\"test1\"}");

        template.sendBody("http:localhost:8080/authenticate?username=test1&password=test2", "");

        assertMockEndpointsSatisfied();
    }
}