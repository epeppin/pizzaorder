$(document).ready(
    function () {
        //declare global variables
        var subTotal = 0;
        var taxRate = 0.051
        var delFee = 2;
        var pizzaPrice = 7.00;
        //set default pizza price
        $("#outputSubTotal").text(pizzaPrice.toFixed(2)).css("color", "lightGreen");
        var toppingsCost = 1.5;
        var toppingsTotal = 0;
        var vegCost = 1;
        var vegTotal = 0;
        var sizeText = "Small";
        //set default size
        $("#outputSize").text(sizeText).css("color", "lightGreen");
        //set default crust
        var crustText = "Thin"
        $("#outputCrust").text(crustText).css("color", "lightGreen");

        // add event handlers
        $("#tabs a").click(showTab);
        $("#pizzaSizeForm").click(pizzaSizeChanged);
        $("#pizzaCrustForm").click(pizzaCrustChanged);
        $("#pizzaTopForm").change(pizzaTopChecked);
        $("#pizzaVegForm").change(pizzaVegChecked);
        $("#delForm").change(updateDelivery);
        $("form").change(orderTotals);


        // all functions (program logic)

        //Update Pizza Size

        function pizzaSizeChanged() {
            var selectedSize = $("input[name=size]:checked");
            sizeText = selectedSize.data("size");
            $("#outputSize").text(sizeText).css("color", "lightGreen");
            pizzaPrice = selectedSize.data("price");
        }

        //Update Pizza Crust
        function pizzaCrustChanged() {
            //find selected crust
            var selectedCrust = $("input[name=crust]:checked");
            crustText = selectedCrust.data("crusttype");
            //output crust text
            $("#outputCrust").text(crustText).css("color", "lightGreen");
        }



        //Update Meat Toppings
        function pizzaTopChecked () {
            var checkedTopps = $("input[name=topping]:checked");
            var toppingsNames = "";
            var numTopp = 0;
            checkedTopps.each(function () {
                    toppingsNames += $(this).val();
                    toppingsNames += ", "
                    numTopp ++
                }
            );
            $("#outputMeatTop").text(toppingsNames).css("color", "lightGreen");
            toppingsTotal = numTopp * toppingsCost;
        }

        //Update Veggi Toppings

        function pizzaVegChecked () {
            var checkedVeg = $("input[name=veg]:checked");
            var vegNames = "";
            var numVeg = 0;
            checkedVeg.each(function () {
                    vegNames += $(this).val();
                    vegNames += ", "
                    numVeg ++
                }
            );
            $("#outputVegiTop").text(vegNames).css("color", "lightGreen");
            vegTotal = vegCost * numVeg;

        }

        //Update and Display Delivery Details
        function updateDelivery() {
            var name = $("#inputName").val()
            var address = $("#inputAddress").val()
            var city = $("#inputCity").val()
            var state = $("#inputState").val()
            var zip = $("#inputZip").val()
            var phone = $("#inputPhone").val()
            $("#outputName").text(name).css("color", "lightGreen");
            $("#outputAddress").text(address).css("color", "lightGreen");
            $("#outputCity").text(city).css("color", "lightGreen");
            $("#outputState").text(state).css("color", "lightGreen");
            $("#outputZip").text(zip).css("color", "lightGreen");
            $("#outputPhone").text(phone).css("color", "lightGreen");
        }

        //calc and display totals
        function orderTotals() {
            subTotal = (pizzaPrice + vegTotal + toppingsTotal);
            var taxTotal = (subTotal * taxRate)
            var grandTotal = (subTotal + taxTotal + delFee)
            $("#outputSubTotal").text(subTotal.toFixed(2)).css("color", "lightGreen")
            $("#outputTax").text(taxTotal.toFixed(2)).css("color", "lightGreen")
            $("#outputDelFee").text(delFee.toFixed(2)).css("color", "lightGreen")
            $("#outputGrandTotal").text(grandTotal.toFixed(2)).css("color", "lightGreen")
        }

        //function for tabs
        function showTab(event) {
            event.preventDefault();
            $(this).tab("show");
        }

    }
);