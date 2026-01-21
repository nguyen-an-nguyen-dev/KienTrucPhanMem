package decorator;

import strategy.PaymentStrategy;

public class DiscountDecorator extends PaymentDecorator {

    public DiscountDecorator(PaymentStrategy payment) {
        super(payment);
    }

    @Override
    public double pay(double amount) {
        double discount = 20;
        System.out.println("Giảm giá: " + discount);
        return payment.pay(amount - discount);
    }
}
