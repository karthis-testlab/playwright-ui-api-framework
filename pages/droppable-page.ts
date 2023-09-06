import { type Locator, type Page } from "@playwright/test";
import * as repo from '../utils/object-repositories-handler';

export class DroppablePage {

    readonly page: Page;
    readonly draggableElement: Locator;
    readonly droppableElement: Locator;
    readonly droppableMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.draggableElement = page.locator(repo.getDraggableHoverObject());
        this.droppableElement = page.locator(repo.getDroppableHoverObject());
        this.droppableMessage = page.locator(repo.getDroppableTextObject());
    }

    async dragAndDropAction() {
        await this.draggableElement.hover();
        await this.page.mouse.down();
        await this.droppableElement.hover();
        await this.page.mouse.up();
    }   

    locateDroppableMessage() {
        return this.droppableMessage;
    }

}

export default DroppablePage;