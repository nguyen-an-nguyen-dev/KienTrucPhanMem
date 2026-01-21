package state;

public class InitState implements PaymentState {
    @Override
    public void handle(PaymentContext context) {
        System.out.println("Khởi tạo thanh toán");
        context.setState(new ProcessingState());
    }
}
