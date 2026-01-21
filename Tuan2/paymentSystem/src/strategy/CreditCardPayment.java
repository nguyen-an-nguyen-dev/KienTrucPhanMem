package strategy;

public class CreditCardPayment implements PaymentStrategy {
    @Override
    public double pay(double amount) {
        System.out.println("Thanh toán bằng Thẻ tín dụng");
        return amount;
    }
}
