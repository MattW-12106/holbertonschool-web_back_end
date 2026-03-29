#!/usr/bin/env python3
"""
annotate the below function's parameters 
and return values with the appropriate types
"""
import typing


def element_length(lst: typing.List[str]) -> typing.List[typing.Tuple[str, int]]:
    """Return a list of tuples, where each tuple contains a string from lst"""
    return [(i, len(i)) for i in lst]