/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {

    constructor(amountDue, cashTendered) {
        this.amountDue = amountDue;
        this.cashTendered = cashTendered;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
        if (type === "penny") {
            return this.cashTendered + 1;
        }
        if (type === "nickel") {
            return this.cashTendered + 5;
        }
        if (type === "dime") {
            return this.cashTendered + 10;
        }
        if (type === "quarter") {
            return this.cashTendered + 25;
        }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
        if (this.cashTendered >= this.amountDue) {
            return true;
        } else {
            return false;
        }
    }

    giveChange() {
        // TODO return the correct change in the following format...
        let numQuarters = 0;
        let numDimes = 0;
        let numNickels = 0;
        let numPennies = 0;
        let moneyBack = this.cashTendered - this.amountDue;
        while (moneyBack > 0) {
            if (moneyBack >= 25) {
                moneyBack -= 25;
                numQuarters += 1;
            } else if (moneyBack >= 10) {
                moneyBack -= 10;
                numDimes += 1;
            } else if (moneyBack >= 5) {
                moneyBack -= 5;
                numNickels += 1;
            } else if (moneyBack >= 1) {
                moneyBack -= 1;
                numPennies += 1;
            }
        }
        return {
            quarters: numQuarters,
            dimes: numDimes,
            nickels: numNickels,
            pennies: numPennies
        }
    }
}