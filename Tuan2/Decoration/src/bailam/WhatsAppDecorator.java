package bailam;
public class WhatsAppDecorator extends BaseNotifierDecorator {
    public WhatsAppDecorator(INotifier notifier) {
        super(notifier);
    }

    @Override
    public void send(String message) {
        super.send(message); // Gọi phương thức của đối tượng trước đó trong chuỗi [2]
        System.out.println("Sending WhatsApp message: " + message); // Thêm hành vi mới [5], [2]
    }
}

// Decorator cho Facebook
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