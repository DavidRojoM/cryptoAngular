import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Coin } from '../models/coin'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  API_URL =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  COINS: Coin[] = []
  // eslint-disable-next-line no-useless-constructor
  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Coin[]>(this.API_URL).subscribe(
      (res) => {
        // this.COINS = res
        this.COINS = res
      },
      (err) => {
        console.error(err)
      }
    )
  }
}
