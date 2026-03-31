#!/usr/bin/env python3
"""
Create a measure_time function with integers n and max_delay as arguments
that measures the total execution time for wait_n(n, max_delay),
and returns total_time / n. Your function should return a float.
"""

# imports
import time
import asyncio
from typing import Tuple

# Importing wait_n from the previous task
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measures the total runtime of wait_n(n, max_delay) and returns total_time / n."""
    # Record the start time
    start_time = time.time()

    # Run the wait_n function with the given n and max_delay
    asyncio.run(wait_n(n, max_delay))

    # Record the end time
    end_time = time.time()

    # Calculate the total time taken and return the average time per task
    total_time = end_time - start_time

    return total_time / n
