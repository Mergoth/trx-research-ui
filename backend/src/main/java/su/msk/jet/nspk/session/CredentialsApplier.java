package su.msk.jet.nspk.session;

import javax.servlet.http.HttpSession;
import org.apache.camel.Exchange;
import org.apache.camel.Message;
import org.apache.camel.Processor;
import org.apache.camel.component.http.HttpMessage;
import org.apache.commons.codec.binary.Base64;
import org.eclipse.jetty.http.HttpException;
import org.eclipse.jetty.http.HttpStatus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import su.msk.jet.nspk.constants.AuthenticationParams;


public class CredentialsApplier implements Processor {

    private static final Logger log = LoggerFactory.getLogger(CredentialsApplier.class);
    
    public void process(Exchange exchange) {
        HttpSession session = exchange.getIn(HttpMessage.class).getRequest().getSession();
        Message message = exchange.getIn();

        String username = (String) session.getAttribute(AuthenticationParams.USERNAME);
        log.debug("Applying session attributes. Session {}, username: {}",session.getId(),username);
        if (username== null) {
            //exchange.setException(new HttpException(HttpStatus.UNAUTHORIZED_401));
            exchange.getIn().setHeader(Exchange.HTTP_RESPONSE_CODE,401);

            log.warn("No attributes to apply to session! {}",session);
        }else {

            String userPass = username + ":" + session.getAttribute(AuthenticationParams.PASSWORD);

            message.setHeader("Authorization", new StringBuilder().append("Basic ").append(Base64.encodeBase64String(userPass.getBytes())));
            message.setHeader("NspkSearchServiceUsername", username);
            message.setHeader("NspkSearchServicePassword", session.getAttribute(AuthenticationParams.PASSWORD));
        }
    }
}
