<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Material;

use MoonShine\Fields\Number;
use MoonShine\Fields\Relationships\BelongsTo;
use MoonShine\Fields\Text;
use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;

/**
 * @extends ModelResource<Material>
 */
class MaterialResource extends ModelResource
{
    protected string $model = Material::class;

    protected string $title = 'Материалы';

    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                Text::make("Наименование", "name"),
                Number::make("Приоритет", "sort_order"),
                BelongsTo::make("Тип материала", 'materialType', fn($item)=>"$item->name")
            ]),
        ];
    }

    public function rules(Model $item): array
    {
        return [];
    }
}
