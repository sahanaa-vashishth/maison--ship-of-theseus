import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class User implements Serializable {
    private String name;
    private String email;
    private String password;
    private List<String> quests;

    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.quests = new ArrayList<>();
    }

    public void addQuest(String quest) {
        quests.add(quest);
    }

    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getPassword() { return password; }
    public List<String> getQuests() { return quests; }
} 