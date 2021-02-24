package dev.temnikov.bots.clientBot;

import com.pengrad.telegrambot.TelegramBot;
import com.pengrad.telegrambot.model.Message;
import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.request.GetUpdates;
import com.pengrad.telegrambot.request.SendMessage;
import com.pengrad.telegrambot.response.GetUpdatesResponse;
import dev.temnikov.bots.BotCommand;
import dev.temnikov.bots.domain.MessageText;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
@Scope("singleton")
public class ClientBot {


    static int offset = 0;

    Map<String, ClientBotCommand> commands = new HashMap<>();


    ConcurrentHashMap<Long, String> previousCommandMap = new ConcurrentHashMap<>();

    @Autowired
    ClientBot(List<ClientBotCommand> botCommands) {
        commands = botCommands.stream().collect(Collectors.toMap(ClientBotCommand::getCommand, Function.identity()));
    }

    @Autowired
    public void newMessageListener(){
        TelegramBot bot = new TelegramBot("1602107973:AAEnHI0xwVzuvAzJutApG0qG1lNM4z6Q0aU");
        while (true) {
            try {
                GetUpdates getUpdates = new GetUpdates().limit(1).offset(ClientBot.offset);
                GetUpdatesResponse execute = bot.execute(getUpdates);
                List<Update> updates = execute.updates();
                if (updates != null && !updates.isEmpty()) {
                    Update update = updates.get(0);
                    try {
                        MessageText messageText = getMessageText(update);
                        if (messageText.getMessage() != null) {
                            System.out.println(messageText.getText());
                            String[] s = messageText.getText().split("_");
                            BotCommand command = commands.getOrDefault(s[0], commands.get(ClientBotCommandsPrefixes.START));
                            SendMessage sendMessage = command.process(update, messageText);
                            if (sendMessage != null) {
                                bot.execute(sendMessage);
                            }
                        }
                        offset = update.updateId() + 1;
                    } catch (Exception e) {
                        e.printStackTrace();
                        offset = update.updateId() + 1;
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    private MessageText getMessageText(Update update) {
        Message message = update.message();
        String text = null;
        if (message != null) {
            text = message.text();
        } else if (update.callbackQuery() != null) {
            message = update.callbackQuery().message();
            text = update.callbackQuery().data();
        }
        return new MessageText(message, text);
    }
}
