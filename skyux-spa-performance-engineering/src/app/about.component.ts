import {
  Component
} from '@angular/core';

@Component({
  selector: 'about-page',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public aboutText1 = `Performance Engineering, Inc. was formed in 1990 to provide quality engineering and project management services to manufacturing and industrial clients. With over 20 engineering associates, the company offers a variety of engineering and project management services. Our licensed professional engineering associates utilize their 10 to 25 years of manufacturing and industrial experience to guide projects through all stages including scope development, estimating, project approval, engineering, construction, commissioning, and startup.`;

  public aboutText2 = `Due to our reputation and close relationship with our clients, we were being asked to not only consult on a variety of engineering projects but to provide engineering staffing services. In 1998, we made the division of services formal by forming a subsidiary now called Performance Technical Services, LLC. This company was designed to further serve our clients by providing contract or permanent engineering design and technical support staff. In 2009, we expanded our staffing services to include life science staffing which include candidates as chemists, biologists, analytical scientists, quality control, quality assurance, and the like.`;
}
