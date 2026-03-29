#!/usr/bin/env python3
"""
defines function sum_mixed_list
which takes a list mxd_lst of integers
and floats and returns their sum as a float
"""
import typing


def sum_mixed_list(mxd_lst: typing.List[typing.Union[int, float]]) -> float:
    """Return the sum of all the integers and floats in mxd_lst as a float"""
    return sum(mxd_lst)
