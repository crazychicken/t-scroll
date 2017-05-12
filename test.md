<script type="text/javascript">
    // 1
    Tu.animate_scroll({
        't_element': '.t_default', // undefined -> console.log(...) warning
        't_animate': 'zoomIn' // undefined -> console.log(...) warning
    })
    // 2
    Tu.animate_scroll({
        't_element': '.t_default',
        't_animate': 'zoomIn',
        't_position': 100
        // 100 -> true ->
        // '100' -> false -> console.log(...) warning
        // undefined -> t_position = 0 ->
    })
    // 3
    Tu.animate_scroll({
        't_element': '.t_default',
        't_animate': 'zoomIn',
        't_position': 100,
        't_delay': 3
        // 100 -> true ->
        // '100' -> false -> console.log(...) warning
        // undefined -> t_delay = 0 (css define .t_default) ->
        // options: time
    })
    // 4
    Tu.animate_scroll({
        't_element': '.t_default',
        't_animate': 'zoomIn',
        't_position': 100,
        't_delay': 3,
        't_direction': normal
        // undefined -> t_direction = normal (css define .t_default) ->
        // options: normal, reverse, alternate, alternate-reverse, initial, inherit
    })
    // 5
    Tu.animate_scroll({
        't_element': '.t_default',
        't_animate': 'zoomIn',
        't_position': 100,
        't_delay': 3,
        't_direction': normal,
        't_duration': 1
        // 1 -> true ->
        // '1' -> false -> console.log(...) warning
        // undefined -> t_duration = 0.25s (css define .t_default) ->
        // options: time, initial, inherit
    })
    // 6
    Tu.animate_scroll({
        't_element': '.t_default',
        't_animate': 'zoomIn',
        't_position': 100,
        't_delay': 3,
        't_direction': normal,
        't_duration': 1,
        't_count': 1,
        // undefined -> t_countn = 1 (css define .t_default) ->
        // options: number, ifinite, initial, inherit
        't_function'
    })
    // 7
    Tu.animate_scroll({
        't_element': '.t_default',
        't_animate': 'zoomIn',
        't_position': 100,
        't_delay': 3,
        't_direction': normal,
        't_duration': 1,
        't_count': 1,
        't_function': linear
        // undefined -> t_countn = 1 (css define .t_default) ->
        // options: linear, ease, ease-in, ease-out, ease-in-out, step-start, step-end, initial, inherit
    });

    // 8 Call tow function, library will input form top to bottom value have insert.
    Tu.animate_scroll({
        't_element': '.t_default',
        't_animate': 'zoomIn'
    })
    Tu.animate_scroll({
        't_element': '.zoomIn'
    })

    // 9 Call the same t_elemtn + t_animate do not run
    Tu.animate_scroll({
        't_element': '.zoomIn',
        't_animate': 'zoomIn'
    })
</script>


<!--
t_duration read value top to down - no care number
t_delay read number small to big - care number

Error //
Tu.animate_scroll({
    't_element': '.zoomIn',
    't_delay': 1
})
Tu.animate_scroll({
    't_element': '.zoomIn',
    't_delay': 2
})

-->