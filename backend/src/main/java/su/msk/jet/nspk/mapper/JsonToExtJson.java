package su.msk.jet.nspk.mapper;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import su.msk.jet.nspk.model.ExtJsonData;

import java.io.IOException;
import java.util.HashMap;

/**
 * Created by vl.vorobyev on 26.03.2015.
 */
public class JsonToExtJson implements Processor {
    private static final Logger log = LoggerFactory.getLogger(JsonToExtJson.class);

    @Override
    public void process(Exchange exchange) throws Exception {
        ExtJsonData ed = new ExtJsonData();
        String jsonString = exchange.getIn().getBody(String.class);
        ObjectMapper om = new ObjectMapper();
        try {
            ed.data = om.readValue(jsonString.getBytes(), HashMap.class);
        } catch (IOException e) {
           log.error("Error unmarshalling",e);
           ed.success=false;
        }
        String extJson = om.writeValueAsString(ed);
        exchange.getIn().setBody(extJson);
    }
}
