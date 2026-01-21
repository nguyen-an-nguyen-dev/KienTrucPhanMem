package bailam;

public class FacebookDecorator extends BaseNotifierDecorator {
    public FacebookDecorator(INotifier notifier) {
        super(notifier);
    }

    @Override
    public void send(String message) {
        super.send(message); // Gọi phương thức của đối tượng được bao bọc [4]
        System.out.println("Sending Facebook notification: " + message); // Thêm hành vi mới [3], [2]
    }
}