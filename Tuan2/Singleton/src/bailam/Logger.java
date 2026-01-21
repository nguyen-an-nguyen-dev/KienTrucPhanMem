package bailam;

public class Logger {

    // 1. Biến static giữ instance duy nhất
    private static Logger instance;

    // 2. Constructor private (không cho new từ bên ngoài)
    private Logger() {
    }

    // 3. Method public để lấy instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}
