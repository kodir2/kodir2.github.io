declare var COLLAPS_CONF: Conf | Conf[]

type Conf = {
    dom_id?: string
    replaces?: string[]

    src?: string
    movie?: number | string
    kinopoisk_var?: string
    kinopoisk_id?: number | string
    title?: string

    templates: Template[]
    separator: string
    charset: string

    width?: number | string
    height?: number | string
    frame_params?: string[]
    not_found_cb?()
    error_cb?()

    _lastInserts
}

type Template = {
    regexp: string

    // [title, year, season, episode] position in regexp groups
    order: number[]
}
