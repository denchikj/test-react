import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import cls from './Sidebar.module.scss';
import { Button } from 'app/shared/ui/Button/Button';
import { ThemeSwitcher } from 'app/shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'app/shared/ui/LangSwitcher/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button onClick={onToggle}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
