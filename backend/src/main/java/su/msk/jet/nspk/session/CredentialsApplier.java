package su.msk.jet.nspk.session;

import javax.servlet.http.HttpSession;
import org.apache.camel.Exchange;
import org.apache.camel.Message;
import org.apache.camel.Processor;
import org.apache.camel.component.http.HttpMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import su.msk.jet.nspk.constants.AuthenticationParams;

public class CredentialsApplier implements Processor {

    private static final Logger log = LoggerFactory.getLogger(CredentialsApplier.class);
    
    public void process(Exchange exchange) {
        HttpSession session = exchange.getIn(HttpMessage.class).getRequest().getSession();
        Message message = exchange.getIn();
        
        message.setHeader("authMethod", "Basic");
        message.setHeader("authUsername", session.getAttribute(AuthenticationParams.USERNAME));
        message.setHeader("authPassword", session.getAttribute(AuthenticationParams.PASSWORD));
    }
}
