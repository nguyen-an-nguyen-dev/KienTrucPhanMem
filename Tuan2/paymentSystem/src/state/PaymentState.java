package state;

public interface PaymentState {
    void handle(PaymentContext context);
}