<?php

if (!empty($_GET)) {
    echo canGo($_GET['x1'], $_GET['y1'], $_GET['x2'], $_GET['y2']) ? 'Yes' : 'No';
}

function canGo($x1, $y1, $x2, $y2): bool
{
    // За пределами доски
    if (
        ($x2 < 0 || $x2 > 7) ||
        ($y2 < 0 || $y2 > 7)
    ) return false;

    $possible_coords = [
        [$x1 + 1, $y1 + 2],
        [$x1 + 2, $y1 + 1],
        [$x1 - 1, $y1 + 2],
        [$x1 - 2, $y1 + 1],
        [$x1 + 1, $y1 - 2],
        [$x1 + 2, $y1 - 1],
        [$x1 - 1, $y1 - 2],
        [$x1 - 2, $y1 - 1],
    ];

    return in_array([$x2, $y2], $possible_coords);
}