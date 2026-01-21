package main;

import decorator.DiscountDecorator;
import decorator.ProcessingFeeDecorator;
import state.PaymentContext;
import strategy.CreditCardPayment;
import strategy.PaymentStrategy;

public class Main {
	public static void main(String[] args) {

        PaymentStrategy payment =
            new DiscountDecorator(
                new ProcessingFeeDecorator(
                    new CreditCardPayment()
                )
            );

        double finalAmount = payment.pay(200);
        System.out.println("Số tiền cuối cùng: " + finalAmount);

        PaymentContext context = new PaymentContext();
        context.process();
        context.process();
        context.process();
	}

}
