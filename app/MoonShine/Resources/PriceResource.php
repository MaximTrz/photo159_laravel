<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Faker\Provider\Text;
use Illuminate\Database\Eloquent\Model;
use App\Models\Price;

use MoonShine\Fields\Number;
use MoonShine\Fields\Relationships\BelongsTo;
use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;

/**
 * @extends ModelResource<Price>
 */
class PriceResource extends ModelResource
{
    protected string $model = Price::class;

    protected string $title = 'Цены';

    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                BelongsTo::make("Материал", 'material', fn($item)=>"$item->name"),
                BelongsTo::make("Размер", "size", fn($item)=>"$item->width X $item->height $item->comment"),
                Number::make('Цена', 'price'),
                BelongsTo::make("Типы цены", "priceType", fn($item)=>"$item->name")
            ]),
        ];
    }

    public function rules(Model $item): array
    {
        return [];
    }
}
