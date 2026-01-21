package bailam;

public class Client {
	public static void main(String[] args) {
        // Tạo một đối tượng gửi thông báo qua cả Email, WhatsApp và Facebook [4]
        INotifier notifier = new FacebookDecorator(
                                new WhatsAppDecorator(
                                    new Notifier()));

        // Khi gọi send, nó sẽ thực thi lần lượt qua các lớp bao bọc [4]
        notifier.send("Đơn hàng của bạn đang được giao!");
    }
}
