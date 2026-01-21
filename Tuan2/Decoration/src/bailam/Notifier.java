package bailam;

public class Notifier implements INotifier {
    @Override
    public void send(String message) {
        // Lấy email từ username thông qua database và gửi message [3]
        System.out.println("Sending Email: " + message);
    }
}