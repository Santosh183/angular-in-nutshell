import { Routes } from '@angular/router';
import { BuiltInAttributeDirectivesComponent } from './directives/built-in-attribute-directives/built-in-attribute-directives.component';
import { BuiltInStructuralDirectivesComponent } from './directives/built-in-structural-directives/built-in-structural-directives.component';
import { CustomAttributeDirectiveComponent } from './directives/custom-attribute-directive/custom-attribute-directive.component';
import { CustomStructuralDirectiveComponent } from './directives/custom-structural-directive/custom-structural-directive.component';
import { RoutingParentComponent } from './routing/routing-parent/routing-parent.component';
import { FirstChildRouteComponent } from './routing/first-child-route/first-child-route.component';
import { SecondChildRouteComponent } from './routing/second-child-route/second-child-route.component';
import { RouteGuardedComponent } from './routing/route-guarded/route-guarded.component';
import { AuthGuard } from './guards/random-auth-guard.guard';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { InterceptorsDemoComponent } from './interceptors-demo/interceptors-demo.component';
import { InbuiltPipesComponent } from './pipes/inbuilt-pipes/inbuilt-pipes.component';
import { CustomPipeComponent } from './pipes/custom-pipe/custom-pipe.component';

export const routes: Routes = [
    {
        path: 'built-in-attriute-directive',
        component: BuiltInAttributeDirectivesComponent
    },
    {
        path: 'built-in-structural-directive',
        component: BuiltInStructuralDirectivesComponent
    },
    {
        path: 'custom-attribute-directive',
        component: CustomAttributeDirectiveComponent
    },
    {
        path: 'custom-structural-directive',
        component: CustomStructuralDirectiveComponent
    },
    {
        path: 'nested-routes',
        component: RoutingParentComponent,
        children: [
            {
                title: 'First child',
                path: 'child-one',
                component: FirstChildRouteComponent
            },
            {
                path: 'child-two',
                component: SecondChildRouteComponent
            },
        ]
    },
    {
        path: 'route-guarded-component',
        component: RouteGuardedComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'reactive-form-validation',
        component: ReactiveFormComponent,
    },
    {
        path: 'template-driven-form-validation',
        component: TemplateDrivenFormComponent,
    },
    {
        path: 'interceptors-demo',
        component: InterceptorsDemoComponent
    },
    {
        path: 'inbuilt-pipes',
        component: InbuiltPipesComponent
    },
    {
        path: 'custom-pipes',
        component: CustomPipeComponent
    }
];
