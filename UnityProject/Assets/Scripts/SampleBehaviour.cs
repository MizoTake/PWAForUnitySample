using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SampleBehaviour : MonoBehaviour
{
	int _cnt = 0;
	public Text _text;

	void Start ()
	{
		_text.text = _cnt + "";
	}

	public void CountUp ()
	{
		_cnt += 1;
		_text.text = _cnt + "";
	}
}