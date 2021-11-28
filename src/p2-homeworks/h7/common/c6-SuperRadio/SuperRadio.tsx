import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'
type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,className,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange && onChange(e)
    }
    const finalClassName=s.radio+(className?' '+className: '')

    //радио-зависимые между собой точки(если одна нажимается,
    //то остальные отключаются поэтому важно определить группу для инпута
    //которая указывается в его атрибуте name и его надо передавать снаружи
    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i} className={s.label}>
            <input
                className={finalClassName}
                type={'radio'}
                onChange={onChangeCallback}
                name={name}
                checked={o===value}
                value={o}
                {...restProps}
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
