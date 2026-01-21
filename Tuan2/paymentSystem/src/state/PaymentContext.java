package state;

public class PaymentContext {
    private PaymentState state = new InitState();

    public void setState(PaymentState state) {
        this.state = state;
    }

    public void process() {
        state.handle(this);
    }
}
