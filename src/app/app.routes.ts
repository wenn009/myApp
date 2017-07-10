import { Routes, RouterModule} from "@angular/router";
import { ProblemListComponent } from './component/problem-list/problem-list.component';
import { ProblemDetailComponent } from './component/problem-detail/problem-detail.component';


const routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path:'problems',
        component: ProblemListComponent
    },
    {
        path:'problems/:id',
        component: ProblemDetailComponent
    },
    {
        path: '**',
        redirectTo: 'problems'
    }

];

export const routing= RouterModule.forRoot(routes);