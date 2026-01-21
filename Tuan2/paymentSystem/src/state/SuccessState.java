package state;

public class SuccessState implements PaymentState {
    @Override
    public void handle(PaymentContext context) {
        System.out.println("Thanh toán thành công");
    }
}
