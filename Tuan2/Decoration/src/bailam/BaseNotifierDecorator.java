package bailam;

public abstract class BaseNotifierDecorator implements INotifier {
    protected INotifier wrapped; // Tham chiếu đến đối tượng được bao bọc [2]

    public BaseNotifierDecorator(INotifier notifier) {
        this.wrapped = notifier;
    }

    @Override
    public void send(String message) {
        wrapped.send(message); // Chuyển tiếp hành động cho đối tượng bên trong [4], [2]
    }
}