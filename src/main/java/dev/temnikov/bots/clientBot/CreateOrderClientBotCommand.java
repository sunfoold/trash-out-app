package dev.temnikov.bots.clientBot;

import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.request.SendMessage;
import dev.temnikov.bots.domain.MessageText;
import org.springframework.stereotype.Component;

@Component
public class CreateOrderClientBotCommand implements ClientBotCommand {

    @Override
    public SendMessage process(Update update, MessageText messageText) {
        return null;
    }

    @Override
    public String getCommand() {
        return null;
    }
}
