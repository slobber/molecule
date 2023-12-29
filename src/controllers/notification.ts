import React from 'react';
import ViewSuspense from 'mo/client/components/viewSuspense';
import { BaseController } from 'mo/glue';
import { type INotificationItem, NotificationEvent } from 'mo/models/notification';
import type { IStatusBarItem } from 'mo/models/statusBar';
import type { BuiltinService } from 'mo/services/builtin';
import type { NotificationService } from 'mo/services/notification';
import type { StatusBarService } from 'mo/services/statusBar';
import type { IMenuItemProps } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface INotificationController extends BaseController {
    onCloseNotification(item: INotificationItem): void;
    onClick?: (e: React.MouseEvent, item?: IStatusBarItem) => void;
    onActionBarClick?(item: IMenuItemProps): void;
    toggleNotifications(): void;
}

@injectable()
export class NotificationController extends BaseController implements INotificationController {
    constructor(
        @inject('notification') private notification: NotificationService,
        @inject('statusBar') private statusBar: StatusBarService,
        @inject('builtin') private builtin: BuiltinService
    ) {
        super();
        this.initView();
    }

    private initView() {
        const { NOTIFICATION, NOTIFICATION_CLEAR_ALL, NOTIFICATION_HIDE } =
            this.builtin.getModules();
        if (NOTIFICATION) {
            this.statusBar.add({
                ...NOTIFICATION,
                render: () =>
                    React.createElement(ViewSuspense, {
                        key: 'notification',
                        token: 'notification',
                    }),
            });
            this.notification.addToolbar(
                [NOTIFICATION_CLEAR_ALL, NOTIFICATION_HIDE].filter(Boolean)
            );
        }
    }

    public onCloseNotification = (item: INotificationItem<any>): void => {
        this.emit(NotificationEvent.onCloseNotification, item);
    };

    public toggleNotifications() {
        this.emit(NotificationEvent.toggleNotifications);
    }

    public onClick = () => {
        this.emit(NotificationEvent.onClick);
    };

    public onActionBarClick = (item: IMenuItemProps) => {
        this.emit(NotificationEvent.onActionBarClick, item);
    };
}