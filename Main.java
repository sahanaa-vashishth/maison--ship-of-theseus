public class Main {
    public static void main(String[] args) throws Exception {
        UserDatabase db = new UserDatabase();

        // Add a user
        User user = new User("Alice", "alice@example.com", "password123");
        user.addQuest("Visited Taj Mahal");
        user.addQuest("Climbed Great Wall of China");
        db.addUser(user);

        // Save to file
        db.saveToFile("users.db");

        // Load from file
        UserDatabase loadedDb = UserDatabase.loadFromFile("users.db");
        User loadedUser = loadedDb.getUser("alice@example.com");
        System.out.println("Name: " + loadedUser.getName());
        System.out.println("Quests: " + loadedUser.getQuests());
    }
} 