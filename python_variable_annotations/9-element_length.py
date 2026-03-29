#!/usr/bin/env python3
"""
annotate the below function's parameters 
and return values with the appropriate types
"""
import typing


def element_length(lst: typing.Iterable[typing.Sequence]
) -> typing.List[typing.Tuple[typing.Sequence, int]]:
    """Return a list of tuples, where each tuple contains a string from lst"""
    return [(i, len(i)) for i in lst]
