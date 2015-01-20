package su.msk.jet.nspk.session;

import su.msk.jet.nspk.model.User;
import javax.servlet.http.HttpSession;
import org.apache.camel.Exchange;
import org.apache.camel.Message;
import org.apache.camel.Processor;
import org.apache.camel.component.http.HttpMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import su.msk.jet.nspk.constants.AuthenticationParams;
import su.msk.jet.nspk.constants.SessionParams;

public class CredentialsSaver implements Processor {

    private static final Logger log = LoggerFactory.getLogger(CredentialsSaver.class);

    
    public void process(Exchange exchange) {
        HttpSession session = exchange.getIn(HttpMessage.class).getRequest().getSession();
        Message message = exchange.getIn();
        
        String username = message.getHeader(AuthenticationParams.USERNAME, String.class);
        String password = message.getHeader(AuthenticationParams.PASSWORD, String.class);
        
        session.setAttribute(SessionParams.USERNAME, username);
        session.setAttribute(SessionParams.PASSWORD, password);
        exchange.getIn().setBody(new User(username));
    }
}