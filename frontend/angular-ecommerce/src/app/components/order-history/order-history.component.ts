import { Component, OnInit } from "@angular/core";
import { OrderHistory } from "src/app/common/order-history";
import { OrderHistoryService } from "src/app/services/order-history.service";

@Component({
  selector: "app-order-history",
  templateUrl: "./order-history.component.html",
  styleUrls: ["./order-history.component.css"],
})
export class OrderHistoryComponent implements OnInit {
  orderHistoryList: OrderHistory[] = [];
  storage: Storage = sessionStorage;

  myDate: Date = new Date("2023-10-26T15:30:00");

  constructor(private orderHistoryService: OrderHistoryService) {}

  ngOnInit(): void {
    this.handleOrderHistory();
  }

  handleOrderHistory() {
    //read the user's email from browser's storage
    const theEmail = JSON.parse(this.storage.getItem("userEmail")!);

    //retrieve data from the server
    this.orderHistoryService.getOrderHistory(theEmail).subscribe((data) => {
      this.orderHistoryList = data._embedded.orders;
    });
  }
}
