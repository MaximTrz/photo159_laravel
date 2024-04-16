<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;


use Illuminate\Database\Eloquent\Model;
use App\Models\Size;

use MoonShine\Fields\Number;
use MoonShine\Fields\Relationships\BelongsTo;
use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Fields\Text;
/**
 * @extends ModelResource<Size>
 */
class SizeResource extends ModelResource
{
    protected string $model = Size::class;

    protected string $title = 'Размеры';

    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                Number::make("Ширина", "width"),
                Number::make("Высота", "height"),
                Text::make("Комментарий", "comment"),
                Number::make("Приоритет", "sort_order"),
                BelongsTo::make("Тип размера", 'sizeType', fn($item)=>"$item->name"
                )
            ]),
        ];
    }

    public function rules(Model $item): array
    {
        return [];
    }
}
