<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\FAQ;

use MoonShine\Fields\Text;
use MoonShine\Fields\Textarea;
use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;

/**
 * @extends ModelResource<FAQ>
 */
class FAQResource extends ModelResource
{
    protected string $model = FAQ::class;

    protected string $title = 'FAQS';

    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                Textarea::make("Вопрос", "question"),
                Textarea::make("Ответ", "answer")
            ]),
        ];
    }

    public function rules(Model $item): array
    {
        return [];
    }
}
