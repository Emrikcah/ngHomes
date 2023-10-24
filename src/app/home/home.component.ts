import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

//service
import { HousingService } from '../housing.service';

//interface
import { IHousinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <!-- Update the HomeComponent template to include a template variable in the input element called #filter. -->
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <!-- When adding a property binding to a component tag, we use the [attribute] = "value" syntax to notify Angular that the assigned value should be treated as a property from the component class and not a string value. -->
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styles: [
    `
      .results {
        display: grid;
        column-gap: 14px;
        row-gap: 14px;
        grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
        margin-top: 50px;
        justify-content: space-around;
      }

      input[type='text'] {
        border: solid 1px var(--primary-color);
        padding: 10px;
        border-radius: 8px;
        margin-right: 4px;
        display: inline-block;
        width: 30%;
      }

      button {
        padding: 10px;
        border: solid 1px var(--primary-color);
        background: var(--primary-color);
        color: white;
        border-radius: 8px;
      }

      @media (min-width: 500px) and (max-width: 768px) {
        .results {
          grid-template-columns: repeat(2, 1fr);
        }
        input[type='text'] {
          width: 70%;
        }
      }

      @media (max-width: 499px) {
        .results {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  
//Properties
  housingLocationList: IHousinglocation[] = [];
  /**The filteredLocationList hold the values that match the search criteria entered by the user.
The filteredLocationList should contain the total set of housing locations values by default when the page loads. Update the constructor for the HomeComponent to set the value. */
  filteredLocationList: IHousinglocation[] = [];

  housingService: HousingService = inject(HousingService);

  //Methods
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  //Ctor
  constructor() {
   
    //syncronous version with static data
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
}
