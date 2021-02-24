package dev.temnikov.bots.clientBot;

import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.request.SendMessage;
import dev.temnikov.bots.domain.MessageText;
import dev.temnikov.domain.AppUser;
import dev.temnikov.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class AddressClientBotCommand implements ClientBotCommand {

    @Autowired
    AppUserService appUserService;

    @Override
    public SendMessage process(Update update, MessageText messageText) {
        long chatId =  update.message().chat().id();
        Optional<AppUser> byTelegramChatId = appUserService.findByTelegramChatId(chatId);
        AppUser appUser = byTelegramChatId.get();
    }


    @Override
    public String getCommand() {
        return null;
    }
}
