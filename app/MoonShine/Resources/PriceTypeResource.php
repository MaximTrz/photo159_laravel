<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\PriceType;

use MoonShine\Fields\Text;
use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;

/**
 * @extends ModelResource<PriceType>
 */
class PriceTypeResource extends ModelResource
{
    protected string $model = PriceType::class;

    protected string $title = 'Типы цен';

    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                Text::make("Наименование", "name")
            ]),
        ];
    }

    public function rules(Model $item): array
    {
        return [];
    }
}
