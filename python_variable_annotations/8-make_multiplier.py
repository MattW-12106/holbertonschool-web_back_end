#!/usr/bin/env python3
"""
defines a function make_multiplier
that takes a float multiplier as argument
and returns a function that multiplies a float by multiplier
"""


import typing

def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """Return a function that multiplies a float by multiplier"""
    def multiplier_func(x: float) -> float:
        """Return the product of x and multiplier as a float"""
        return x * multiplier
    return multiplier_func
