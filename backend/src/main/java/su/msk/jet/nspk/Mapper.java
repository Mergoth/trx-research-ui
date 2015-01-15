package su.msk.jet.nspk;

import org.apache.camel.Exchange;
import org.apache.camel.Message;
import org.apache.camel.Processor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Mapper implements Processor {

    private static final Logger log = LoggerFactory.getLogger(Mapper.class);

    @Override
    public void process(Exchange exchange) {        
        Message msg = exchange.getIn();
    }
}
