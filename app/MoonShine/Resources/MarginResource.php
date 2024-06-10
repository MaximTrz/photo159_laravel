<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Margin;

use MoonShine\Fields\Number;
use MoonShine\Fields\Relationships\BelongsTo;
use MoonShine\Fields\Text;
use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;

/**
 * @extends ModelResource<Margin>
 */
class MarginResource extends ModelResource
{
    protected string $model = Margin::class;

    protected string $title = 'Поля';

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
