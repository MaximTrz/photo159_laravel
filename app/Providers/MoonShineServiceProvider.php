<?php

declare(strict_types=1);

namespace App\Providers;

use App\MoonShine\Resources\ContactResource;
use App\MoonShine\Resources\FAQResource;
use App\MoonShine\Resources\MarginResource;
use App\MoonShine\Resources\MaterialResource;
use App\MoonShine\Resources\MaterialTypeResource;
use App\MoonShine\Resources\PriceResource;
use App\MoonShine\Resources\PriceTypeResource;
use App\MoonShine\Resources\ServiceResource;
use App\MoonShine\Resources\SizeResource;
use App\MoonShine\Resources\SizeTypeResource;
use MoonShine\Providers\MoonShineApplicationServiceProvider;
use MoonShine\MoonShine;
use MoonShine\Menu\MenuGroup;
use MoonShine\Menu\MenuItem;
use MoonShine\Resources\MoonShineUserResource;
use MoonShine\Resources\MoonShineUserRoleResource;

class MoonShineServiceProvider extends MoonShineApplicationServiceProvider
{
    protected function resources(): array
    {
        return [];
    }

    protected function pages(): array
    {
        return [];
    }

    protected function menu(): array
    {
        return [
            MenuGroup::make(static fn() => __('moonshine::ui.resource.system'), [
               MenuItem::make(
                   static fn() => __('moonshine::ui.resource.admins_title'),
                   new MoonShineUserResource()
               ),
               MenuItem::make(
                   static fn() => __('moonshine::ui.resource.role_title'),
                   new MoonShineUserRoleResource()
               ),
            ]),

            MenuGroup::make('Цены', [
                MenuItem::make('Цены', new PriceResource()),
                MenuItem::make('Типы цен', new PriceTypeResource())
            ]),

            MenuGroup::make('Размеры', [
                MenuItem::make('Размеры', new SizeResource()),
                MenuItem::make('Типы размеров', new SizeTypeResource())
            ]),

            MenuGroup::make('Материалы', [
                MenuItem::make('Материалы', new MaterialResource()),
                MenuItem::make('Типы материалов', new MaterialTypeResource())
            ]),

            MenuItem::make('Поля', new MarginResource()),

            MenuItem::make('FAQ', new FAQResource()),

            MenuItem::make("Услуги", new ServiceResource() ),

            MenuItem::make("Контакты", new ContactResource() )

        ];
    }

    /**
     * @return array{css: string, colors: array, darkColors: array}
     */
    protected function theme(): array
    {
        return [];
    }
}
