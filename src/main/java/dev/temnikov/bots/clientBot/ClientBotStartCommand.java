package dev.temnikov.bots.clientBot;

import com.pengrad.telegrambot.model.Update;
import com.pengrad.telegrambot.request.SendMessage;
import dev.temnikov.bots.domain.MessageText;
import dev.temnikov.domain.AppUser;
import dev.temnikov.service.AppUserService;
import dev.temnikov.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class ClientBotStartCommand implements ClientBotCommand {

    @Autowired
    private AppUserService appUserService;

    @Override
    public SendMessage process(Update update, MessageText messageText) {
        Long chatId = update.message().chat().id();
        Optional<AppUser> optUser = appUserService.findByTelegramChatId(chatId);
        if (!optUser.isPresent()){
            AppUser appUser = new AppUser();
            appUser.telegramChatId(chatId);
            optUser = Optional.of(appUserService.save(appUser));
        }



    }

    @Override
    public String getCommand() {
       return ClientBotCommandsPrefixes.START;
    }
}
