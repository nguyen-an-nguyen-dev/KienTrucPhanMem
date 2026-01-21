package decorator;

import strategy.PaymentStrategy;

public class ProcessingFeeDecorator extends PaymentDecorator {

    public ProcessingFeeDecorator(PaymentStrategy payment) {
        super(payment);
    }

    @Override
    public double pay(double amount) {
        double fee = amount * 0.05;
        System.out.println("Phí xử lý: " + fee);
        return payment.pay(amount + fee);
    }
}
